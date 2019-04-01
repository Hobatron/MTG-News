# MTG - News

## HTML Endpoints

### - Homepage

**Definition**
- `GET /`

**Response**
- Scrapes [MTG Archive](https://magic.wizards.com/en/articles/archive), updates the db, then renders the homepage with handlebars.

## Storage
All items are stored in mongodb

### - Articles:

**Definition**
```json
[
    {
        "id": "mongoID",
        "catagory": "Feature",
        "title": "War of the Spark Mechanics",
        "author": "Mat Tabak",
        "description": "Matt reveals the new and returning mechanics you'll see as Nicol Bolas executes his endgame in War of the Spark!",
        "img": "background-image: url(https://magic.wizards.com/sites/mtg/files/images/hero/UABkA31Czn_icon.jpg);",
        "postDate": "March 31 2019",
        "link":"https://magic.wizards.com/en/articles/archive/magic-online/magic-online-announcements-march-2019-03-26",
    },
    {
        `etc`
    },
]
```

### - Comments:

**Definition**
```json
[
    {
        "id": "mongoID",
        "body": "My first comment!", 
        "edit_code": "1234", 
        "created_at": "Date.now()",
        "lastEdited": "default Null", 
    },
    {
        `etc`
    },
]
```
## API Endpoints

### - Usage:
All responses have the form

```json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```

Subsequent response definitions will only detail the expected value of the `data` field

### - List comments associated with article:

**Definition**
- `GET /api/comment`

**Response**
- `200 OK` on success
- `204 No Content` empty comments

```json
[
    {
        "id": "mongoID",
        "body": "Content for the indivdual comment",
        "created_at": "Created @ date",
        "lastEdited": "default Null",
    },
    {
        `etc`
    },
]
```

### - Post new comment:

**Definition**
- `POST /api/comment`

**Arguments**
- `"body": longstring`
- `"edit_code": (4)int`
- `"mongoId": of article`

**Response**
- `201 Created` on success
- `404 Not Found` no article exists

```json
{
    "id": "mongoID for comment",
    "body": "Content for the indivdual comment",
    "created_at": "Date.now()",
    "lastEdited": "default Null",
}
```

### - Edit comment:

**Definition**
- `POST /api/comment/<id>`

**Arguments**
- `"edit_code": int`

**Response**
- `202 Accepted` on success
- `401 Unauthorized` on bad edit_code
- `404 Not Found` comment does not exist

```json
{
    "id": "mongoID",
    "body": "Content for the indivdual comment",
    "created_at": "Created @ date",
    "lastEdited": "Date.now()",
}
```

### - Delete comment:

**Definition**
- `DELETE /api/comment/<id>`

**Arguments**
- `"edit_code": int`

**Response**
- `202 Accepted` on success
- `401 Unauthorized` on bad edit_code
- `404 Not Found` comment does not exist

```json
{
    "id": "mongoID"
}
```