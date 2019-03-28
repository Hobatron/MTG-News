# NPR-Tech-Scrape

## HTML Endpoints

### - Homepage

**Definition**
- `GET /`

**Response**
- Scrapes [NPR Tech](https://www.npr.org/sections/technology/), updates the db, then renders the homepage with handlebars.

## API Endpoints

### Usage
All responses have the form:

```json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```

Subsequent response definitions will only detail the expected value of the `data` field

## Comments

**Storage**
- Comments are stored in a mongodb

**Definition**
 - `"id":` Auto generated id
 - `"body":` Main body of the comment
 - `"edit_code":` User provdied four digit code required to update/delete comment
 - `"created_at":` Is always set to current server date/time
 - `"lastEdited":` If edited, will be set to the current server date/time

```json
{
    "id": "mongoID",
    "body": "Content for the indivdual comment", 
    "edit_code": "(4)int", 
    "created_at": "Date.now()",
    "lastEdited": "default Null", 
}
```

### - List comments associated with artical

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
    }
]
```

### - Post new comment

**Definition**
- `POST /api/comment`

**Arguments**
- `"body": longstring` - required
- `"edit_code": (4)int` - required

**Response**
- `201 Created` on success

```json
{
    "id": "mongoID",
    "body": "Content for the indivdual comment",
    "created_at": "Date.now()",
    "lastEdited": "default Null",
}
```

### - Edit comment

**Definition**
- `POST /api/comment/<id>`

**Arguments**
- `"edit_code": int` - required

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

### - Delete comment

**Definition**
- `DELETE /api/comment/<id>`

**Arguments**
- `"edit_code": int` - required

**Response**
- `202 Accepted` on success
- `401 Unauthorized` on bad edit_code
- `404 Not Found` comment does not exist

```json
{
    "id": "mongoID"
}
```