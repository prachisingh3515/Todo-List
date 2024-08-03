## Link of project: https://todo-list-five-vert-93.vercel.app/

# Overview
The Todo List Application is a simple, user-friendly task management tool built using React. The application allows users to create, edit, and manage their tasks efficiently. It features a modern and intuitive UI, with functionalities such as marking tasks as completed, searching through tasks, and viewing detailed task information.
## Component
TodoForm: This component is responsible for adding new tasks and editing existing tasks. It contains form fields for the task title and description.
TodoList: This component displays a list of tasks. It also includes a search bar to filter tasks based on the search query.
TodoItem: This component represents an individual task item. It displays the task's title, description, timestamp, and actions such as edit and mark as done.

# Implementation
## TodoForm Component
Contains form inputs for the task title and description.
Handles the submission of new tasks.
## TodoList Component
Manages the list of tasks and handles task filtering based on the search query.
Passes down task data and event handlers to the TodoItem components.
## TodoItem Component
Displays task details and action buttons.
Supports editing mode, allowing users to update task details.
Handles task completion status, when background changes to green means task is done.
