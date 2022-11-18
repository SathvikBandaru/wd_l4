
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Testing the todo_list", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "test-list-1",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("add new todo if not there", () => {
    const tolen = all.length;
    add({
      title: "test-list-add",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(tolen + 1);
  });

  //markAsComplete function
  test("mark as complete the if it is true", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("todos-list to get Overdue", () => {
    add({
      title: "test-list-overdue",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("todos-list to get Due today", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("todos-list to get Due later ", () => {
    add({
      title: "test-list-duelater",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});