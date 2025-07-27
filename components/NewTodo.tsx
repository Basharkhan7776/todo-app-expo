import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddPress = () => {
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder='Add a new todo...'
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button onPress={handleAddPress} style={styles.button}>
        <Text>Add</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 16,
  },
  button: {
    paddingHorizontal: 20,
  },
});

export default NewTodo;