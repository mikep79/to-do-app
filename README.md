# to-do-app

Base mode:
- [x] Basics. File tree, server spin up, get and post reqs, routers.
- [x] Set up database (add to database.sql).
- [x] Connect database using pool.
- [x] Retrieve get array.
- [x] Set up POST req to DB.
- [x] Append info to DOM in table form. Add complete and delete buttons.
- [x] Add event listeners for complete and delete task buttons.
- [x] Add DELETE req to server.
- [x] Add styles folder and file, source, and add bg-color classes.
- [x] Use PUT req to update boolean value of completed.
    - [x] Grab completed value (false.. needed?) and id.
    - [x] Determine POSTICO syntax for updating boolean value.
        'UPDATE tasks SET completed = true WHERE id=46;'
    - [x] Use PUT req to send value to server to route tasks/:id.
    - [x] Route updates variable to True. Return response. Reappend with getList.
- [x] Style page.

Hard Mode:
- [x] Append info to separate tables.

Pro Mode: 
- [x] Add delete confirmation.