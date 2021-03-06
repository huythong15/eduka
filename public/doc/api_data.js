define({ "api": [
  {
    "type": "get",
    "url": "/api/datasubcategory?language=&id_category=&id_subcategory=",
    "title": "Lay danh sach Subcategory tu id Category",
    "name": "dataSubCategory",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>ten viet tat cua ngon ngu</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_category",
            "description": "<p>id cua category</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_subcategory",
            "description": "<p>id cua subcategory</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/category?language=",
    "title": "Lay danh sach Category",
    "name": "Category",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>ten viet tat cua ngon ngu</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/subcategory?language=&id_category=",
    "title": "Lay danh sach Subcategory tu id Category",
    "name": "SubCategory",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>ten viet tat cua ngon ngu</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_category",
            "description": "<p>id cua category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/listlanguage",
    "title": "returns the data list language",
    "name": "listLanguage",
    "group": "List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Test",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acronym",
            "description": "<p>Viet tat ten quoc gia</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "display_language",
            "description": "<p>Ten ngon ngu hien thi tren gia dien</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "index",
            "description": "<p>So thu tu xuat hien</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>Ten ngon ngu</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "version_time",
            "description": "<p>Timestamp moi lan them sua xoa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>Anh hien thi cua ngon ngu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"acronym\": \"en\",\n \"display_language\": \"English\",\n \"eduka\": \"add-language\",\n \"index\": \"1\",\n \"language\": \"english\",\n \"version_time\": 1511406509064,\n \"id\": \"english\",\n \"link\": \"https://firebasestorage.googleapis.com/v0/b/nodejs-2fa91.appspot.com/o/icon%20language%2Fspain_flag.png?alt=media&token=9be1832d-f2c1-46a3-a810-7079db4e1c61\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n\"error\":\"userNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/api/allsearch?language=",
    "title": "data subcategory",
    "name": "allsearch",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "language",
            "description": "<p>viet tat ngon ngu</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/searchtag?language=&id_category=&key_word=",
    "title": "Tim kiem Subcategory theo tuf khoa",
    "name": "searchtag",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>ten viet tat cua ngon ngu</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key_word",
            "description": "<p>tu khoa tim kiem</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/versionsearch",
    "title": "Phien ban hien tai",
    "name": "versionsearch",
    "group": "Search",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFoundError",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./test.js",
    "groupTitle": "Search"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_huythong_xps_companyTechplus_apidocjs_doc_main_js",
    "groupTitle": "_home_huythong_xps_companyTechplus_apidocjs_doc_main_js",
    "name": ""
  }
] });
