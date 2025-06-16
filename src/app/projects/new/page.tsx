import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createProject } from '../lib/prisma';
import { Button, Form, Input, Label } from './ui';

const schema = yup.object().shape({
  name: yup.string().required('Project name is required'),
});

export function NewProjectForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await createProject(data);
      alert('Project created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error creating project');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" ref={register} invalid={errors.name} />
      <Button type="submit">Create Project</Button>
    </Form>
  );
}