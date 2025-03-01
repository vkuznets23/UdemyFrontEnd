import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import customFetch from './utils'
import { toast } from 'react-toastify'

export const useFetchTasks = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })
  return { isLoading, error, data }
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success(`Task added`)
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
      console.log(error)
    },
  })
  return { createTask, createTaskLoading }
}

export const useEditTask = () => {
  const queryClient = useQueryClient()

  const { mutate: editTask } = useMutation({
    mutationFn: ({ id, isDone }) => customFetch.patch(`/${id}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success(`Task updated`)
    },
  })
  return { editTask }
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success(`Task deleted`)
    },
  })
  return { deleteTask, deleteTaskLoading }
}
