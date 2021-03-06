define({ "api": [
  {
    "type": "post",
    "url": "/events",
    "title": "Create Event",
    "name": "Create_Event",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Event Subjetc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Event Location</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "event_date",
            "description": "<p>Event Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n  \"subject\":\"How TO improve SW Development\",\n  \"location\":\"ADDIS ABEBA\",\n  \"event_date\":\"1/1/2019\",\n  \"event_date\":\"engida\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"_id\": \"589fb45b48baee02dc7c713b\",\n  \"subject\":\"How TO improve SW Development\",\n  \"location\":\"ADDIS ABEBA\",\n  \"event_date\":\"1/1/2019\",\n  \"event_date\":\"engida\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Get Events",
    "name": "Get_Events",
    "group": "Event",
    "version": "0.0.0",
    "filename": "routes/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/users/passchange",
    "title": "Password Change",
    "name": "ChangePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Old Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New Pasword</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n \"old_password\":\"pass@1234\",\n \"new_password\":\"yonas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Signup User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_name",
            "description": "<p>Users Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "realem",
            "description": "<p>Users Group</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>Users First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>Users last_name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Users email</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date_of_birth",
            "description": "<p>Users Date of Birth</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Users City</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Users Country</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>Users Mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "gender",
            "description": "<p>Users Gender</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_type",
            "description": "<p>User Type , Like Staff, customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n\n    \"user_name\":\"yonas\",\n    \"password\":\"test@123\",\n    \"user_type\":\"customer\",\n    \"first_name\":\"yonas\",\n    \"last_name\":\"engida\",\n    \"email\":\"yengida@gmail.com\",\n    \"mobile\":\"0930015100\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n     {\n  \"_id\": \"589fb45b48baee02dc7c713b\",\n \"user_name\": \"Tsegaw\",\n  \"realm\": \"user\",\n  \"profile\": {\n    \"_id\": \"589fb45b48baee02dc7c713c\",\n    \"user\": \"589fb45b48baee02dc7c713b\",\n    \"first_name\": \"Tsegaw\",\n    \"last_name\": \"Tsegaw\",\n    \"email\": \"test@gmail.com\",\n  },\n  \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n  \"status\": \"active\",\n  \"role\": \"staff\"\n}\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete Specific User information",
    "name": "Delete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n       {\n      \"_id\": \"589fb45b48baee02dc7c713b\",\n      \"user_name\": \"Tsegaw\",\n      \"realm\": \"user\",\n      \"profile\": {\n      \"_id\": \"589fb45b48baee02dc7c713c\",\n      \"user\": \"589fb45b48baee02dc7c713b\",\n      \"first_name\": \"Tsegaw\",\n      \"last_name\": \"Tsegaw\",\n      \"email\": \"test@gmail.com\",\n         },\n    \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n    \"status\": \"active\",\n    \"role\": \"staff\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>Get Specific User Collection. To get Sepecific user information pass id  as parameter.</p>",
    "type": "get",
    "url": "/users/:id",
    "title": "Request Specific User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n       {\n    \"_id\": \"589fb45b48baee02dc7c713b\",\n    \"password\": \"passs@123@123\",\n    \"user_name\": \"Tsegaw\",\n    \"realm\": \"user\",\n     \"profile\": {\n      \"_id\": \"589fb45b48baee02dc7c713c\",\n      \"user\": \"589fb45b48baee02dc7c713b\",\n      \"first_name\": \"Tsegaw\",\n      \"last_name\": \"Tsegaw\",\n      \"email\": \"test@gmail.com\",\n   },\n    \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n    \"status\": \"active\",\n    \"role\": \"staff\"\n  }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request Users information",
    "name": "Get_All_Users",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n     {\n  \"_id\": \"589fb45b48baee02dc7c713b\",\n  \"user_name\": \"Tsegaw\",\n  \"realm\": \"user\",\n    \"profile\": {\n    \"_id\": \"589fb45b48baee02dc7c713c\",\n    \"user\": \"589fb45b48baee02dc7c713b\",\n    \"first_name\": \"Tsegaw\",\n    \"last_name\": \"Tsegaw\",\n    \"email\": \"test@gmail.com\",\n     },\n  \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n  \"status\": \"active\",\n  \"role\": \"staff\"\n}\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>This End point is allow to get  Total Club Count Report.</p>",
    "type": "get",
    "url": "/users/count",
    "title": "Total Users Count",
    "name": "Get_Total_USer_Count",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"total_users_count  \": 1\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "description": "<p>Get Users Collection by Pagination. Use below parameters to query with pagination :- page=&lt;RESULTS_PAGE&gt; and per_page=&lt;RESULTS_PER_PAGE&gt;.</p>",
    "type": "get",
    "url": "/users/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Users Collection by Pagination",
    "name": "Get_Users_Collection",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Users Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "realem",
            "description": "<p>Users Group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>Users First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>Users last_name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Users email</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "date_of_birth",
            "description": "<p>Users Date of Birth</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Users City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Users Country</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>Users Mobile</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "gender",
            "description": "<p>Users Gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user_type",
            "description": "<p>User Type , Like Staff, customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n     {\n  \"_id\": \"589fb45b48baee02dc7c713b\",\n     \"user_name\": \"Tsegaw\",\n  \"realm\": \"user\",\n   \"profile\": {\n    \"_id\": \"589fb45b48baee02dc7c713c\",\n    \"user\": \"589fb45b48baee02dc7c713b\",\n    \"first_name\": \"Tsegaw\",\n    \"last_name\": \"Tsegaw\",\n    \"email\": \"test@gmail.com\",\n  \n  },\n  \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n  \"status\": \"active\",\n  \"role\": \"staff\"\n}\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Users Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n   \"user_name\":\"afrikik-user\",\n   \"password\":\"dhjsdhjhdjhfajf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  {\n  \"token\": \"lxrF2tbwa7bCjnrMjE9P\",\n  \"user\": {\n        \"profile\": {\n          \"_id\": \"58afaeb061fffb6d17477be3\",\n               \"user\": \"58afaea861fffb6d17477be2\",\n               \"first_name\": \"SIMRET MOB1\",\n               \"last_name\": \"yohannes\",\n               \"last_modified\": \"2017-02-28T20:53:23.111Z\"\n            },\n            \"user_name\": \"simret\",\n            \"last_login\": \"2017-03-01T03:17:35.500Z\",\n            \"realm\": \"user\",\n            \"role\": \"customer\",\n             \"status\": \"active\",\n            \"date_created\": \"2017-02-24T03:55:28.307Z\",\n             \"last_modified\": \"2017-03-01T03:17:35.500Z\"\n        }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update Specific User information",
    "name": "UpdateUSer",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Update Data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n \"user_name\":\"afrikik-user\",\n \"password\":\"dhjsdhjhdjhfajf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n     {\n  \"_id\": \"589fb45b48baee02dc7c713b\",\n  \"password\": \"passs@123@123\",\n  \"user_name\": \"Tsegaw\",\n  \"realm\": \"user\",\n   \"profile\": {\n    \"_id\": \"589fb45b48baee02dc7c713c\",\n    \"user\": \"589fb45b48baee02dc7c713b\",\n    \"first_name\": \"Tsegaw\",\n    \"last_name\": \"Tsegaw\",\n    \"email\": \"test@gmail.com\",\n  \n  },\n  \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n  \"status\": \"active\",\n  \"role\": \"staff\"\n}\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
