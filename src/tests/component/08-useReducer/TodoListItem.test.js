import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { shallow } from "enzyme";
import { demoTodo } from "../../fixtures/demoTodo";

describe('pruebas en <TodoListItem/>', () => {
    /** aqui no nos unteresa que si elimine o no  */
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodo[0]}
            i={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />)

    test('should de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodo[0].id);

    });

    test('should de llamar la funcion handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodo[0].id);

    });

    test('should de mostrar el texto correctamente', () => {

        const p = wrapper.find('p');
        /**
         * aqui se pone el 1 porque le dije al indice que i={1}
         */
        expect(p.text().trim()).toBe(`${1 + 1}. ${demoTodo[0].desc}`)
    });

    test('should de tener la clase complete si el todo.done es true', () => {

        const todo = demoTodo[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });

});
