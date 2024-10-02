const todoList=require('../todo');
const{all,markAsComplete,add}=todoList();
describe("Todolist Test Suite",()=>{
    beforeAll(()=>{
        add({
          title:"Test todo",
          completed: false,
          dueDate: new Date().toLocaleDateString("en-CA")
        }
    );
    });
    test("Should add new todo",()=>{
        const todoItemsCout=all.length;
        add(
            {
                title:"Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expert(all.length).toBe(todoItemsCount+1);
    });
    test("Should mark a todo as complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
    test('should retrieve overdue items', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        todos.add({ title: 'Overdue Task', dueDate: yesterday.toISOString().split('T')[0], completed: false });
    
        const overdueItems = todos.overdue();
        expect(overdueItems.length).toBe(1);
        expect(overdueItems[0].title).toBe('Overdue Task');
      });
    
      test('should retrieve items due today', () => {
        const today = new Date().toISOString().split('T')[0];
        todos.add({ title: 'Task Due Today', dueDate: today, completed: false });
    
        const todayItems = todos.dueToday();
        expect(todayItems.length).toBe(1);
        expect(todayItems[0].title).toBe('Task Due Today');
      });
    
      test('should retrieve items due later', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        todos.add({ title: 'Task Due Later', dueDate: tomorrow.toISOString().split('T')[0], completed: false });
    
        const laterItems = todos.dueLater();
        expect(laterItems.length).toBe(1);
        expect(laterItems[0].title).toBe('Task Due Later');
      });
    });
