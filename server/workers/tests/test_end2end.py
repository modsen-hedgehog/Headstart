import json
import pytest
import requests
from workers.tests.mock_app import create_app
from sqlalchemy import create_engine, inspect
from sqlalchemy_utils import database_exists, create_database, drop_database
from workers.persistence.src.models import Base

@pytest.fixture
def app():
    # Create a test Flask app with a temporary test database
    # It will setup the Visualizations and Revisions tables
    # each time the test runs and drop them when the test is done
    app = create_app(config_name="testing")
    engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
    if not database_exists(engine.url):
        create_database(engine.url)
    Base.metadata.bind = engine
    with app.app_context():
        Base.metadata.create_all(bind=engine)
        yield app
        engine.execute('DROP TABLE IF EXISTS visualizations;')
        engine.execute('DROP TABLE IF EXISTS revisions;')
        drop_database(engine.url)

@pytest.fixture
def test_client(app):
    # Create a test client using the test Flask app
    return app.test_client()

@pytest.fixture
def populate_db(test_client):
    """
    This fixture can in future be used to add more diverse test data
    """
    data, vis_params = load_test_data()
    url = "/api/stable/persistence/createVisualization/testdb"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
        "vis_title": "digital education",
        "data": data,
        "vis_clean_query": "digital education",
        "vis_query": "digital education",
        "vis_params": json.dumps({"context": vis_params})
    }
    response = test_client.post(url, json=params)


def load_test_data():
    with open("/app/workers/tests/test_data/digital-education.json") as f:
        raw = json.load(f)
    data = raw["data"]
    vis_params = raw["context"]
    return data, vis_params


def test_hello_world(app, test_client):
    response = test_client.get('/hello')
    assert response.status_code == 200
    assert b"Hello, World!" in response.data

def test_search_api_reachability(test_client):
    # Test that the base URL returns a 200 (OK) HTTP status code
    try:
        response = test_client.get('/api/stable/base/search')
        assert response.status_code == 200
        assert response.content_type == "application/json"
        data = json.loads(response.get_data(as_text=True))
    except requests.exceptions.RequestException as e:
        print('! test test_search_api_reachability with Fail state !')
        print(f"Request failed: {e}")

def test_search_endpoint():
    url = "http://backend/server/services/searchBASE.php"
    params = {
        "unique_id": "530133cf1768e6606f63c641a1a96768",
        "from": "1809-01-01",
        "to": "2023-07-28",
        "document_types": ["121"],
        "q": "digital education",
        "sorting": "most-recent"
    }
    try:
        response = requests.post(url, data=params)
        response.raise_for_status()
        data = response.json()
        assert "query" in data
        assert "id" in data
        assert "status" in data
    except requests.exceptions.RequestException as e:
        print('! test test_search_endpoint with Fail state !')
        print(f"Request failed: {e}")
        print(response.json())

def test_createId(app):
    url = "/api/stable/persistence/createId/testdb"

def test_getLatestRevision(app):
    url = "http://backend/server/services/getLatestRevision.php"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        assert type(data) == list
    except requests.exceptions.RequestException as e:
        print('! test test_getLatestRevision with Fail state !')
        print(f"Request failed: {e}")
        print(response.content)


def test_getLatestRevisionWithContext(app, populate_db):
    url = "http://backend/server/services/getLatestRevision.php"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
        "context": True
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        assert type(data) == dict
    except requests.exceptions.RequestException as e:
        print('! test test_getLatestRevisionWithContext with Fail state !')
        print(f"Request failed: {e}")
        print(response.content)

def test_getLatestRevisionWithDetails(app, populate_db):
    url = "http://backend/server/services/getLatestRevision.php"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
        "context": True,
        "details": True
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        assert type(data) == dict
    except requests.exceptions.RequestException as e:
        print('! test test_getLatestRevisionWithDetails with Fail state !')
        print(f"Request failed: {e}")
        print(response.content)

def test_persistence_api(test_client, app):
    url = "/api/stable/persistence/service_version"
    try:
        response = test_client.get(url)
        assert response.status_code == 200
        assert b"test_version" in response.data
    except requests.exceptions.RequestException as e:
        print('! test test_persistence_api with Fail state !')
        print(f"Request failed: {e}")
        print(response.content)

def test_persistence_api_create_visualization(test_client, app):
    data, vis_params = load_test_data()
    url = "/api/stable/persistence/createVisualization/testdb"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
        "vis_title": "digital education",
        "data": data,
        "vis_clean_query": "digital education",
        "vis_query": "digital education",
        "vis_params": json.dumps({"context": vis_params})
    }
    response = test_client.post(url, json=params)
    assert b'{"success":true}\n' in response.data
    url = "/api/stable/persistence/getLastVersion/testdb"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
        "context": True
    }
    response = test_client.post(url, json=params)
    assert "rev_data" in response.json.keys()
    assert "rev_timestamp" in response.json.keys()
    assert "rev_vis" in response.json.keys()
    assert "vis_params" in response.json.keys()
    assert "vis_query" in response.json.keys()
    assert "vis_title" in response.json.keys()
    return_data = response.json["rev_data"]
    assert data == return_data

def test_search_and_getLatestRevision(app, populate_db):
    """
    This test will be able to test SQLite and Postgres persistence.
    """
    url = "http://backend/server/services/searchBASE.php"
    params = {
        "unique_id": "530133cf1768e6606f63c641a1a96768",
        "from": "1809-01-01",
        "to": "2023-07-28",
        "document_types": ["121"],
        "q": "digital education",
        "sorting": "most-recent"
    }
    try:
        response = requests.post(url, data=params)
        response.raise_for_status()
        data = response.json()
        assert "query" in data
        assert "id" in data
        assert "status" in data
    except requests.exceptions.RequestException as e:
        print('! test test_search_and_getLatestRevision with Fail state !')
        print(f"Request failed: {e}")
        print(response.json())
    url = "http://backend/server/services/getLatestRevision.php"
    params = {
        "vis_id": "530133cf1768e6606f63c641a1a96768",
        "context": True
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        r = response.json()
        assert type(r) == dict
        assert "context" in r.keys()
        assert "data" in r.keys()
        assert type(r["context"]) == dict
        assert type(r["data"]) == str
        data = json.loads(r["data"])
        assert type(data) == list
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        print(response.content)
