import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const { todo: { completed, id, title }, handleChangeProps, deleteTodoProps } = props;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" onClick={() => deleteTodoProps(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  todo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodoItem;
