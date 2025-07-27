import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Text } from '~/components/ui/text';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        style={styles.checkbox}
      />
      <Text style={[styles.text, todo.completed && styles.completedText]}>
        {todo.text}
      </Text>
      <Button variant='destructive' onPress={() => onDelete(todo.id)}>
        <Text>Delete</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkbox: {
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default TodoItem;