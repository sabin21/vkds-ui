"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { ActionButton } from "@/components/ui/action-button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// User Form Schema
const UserFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
})

type UserFormValues = z.infer<typeof UserFormSchema>

// Login Form Schema
const LoginFormSchema = z.object({
  id: z.string().min(4, {
    message: "ID must be at least 4 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

type LoginFormValues = z.infer<typeof LoginFormSchema>

// User Form Component
type UserFormProps = {
  form: UseFormReturn<UserFormValues>;
  onSubmit: SubmitHandler<UserFormValues>;
}

function UserForm({ form, onSubmit }: UserFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form-block">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사용자 이름</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} className="input-text"/>
              </FormControl>
              <FormDescription>
                사용자 명칭을 입력해주세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} className="input-text"/>
              </FormControl>
              <FormDescription>
                Enter your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St, City, Country" {...field} className="input-text"/>
              </FormControl>
              <FormDescription>
                Enter your full address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ActionButton type="submit">Submit</ActionButton>
      </form>
    </Form>
  )
}

// Login Form Component
type LoginFormProps = {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: SubmitHandler<LoginFormValues>;
}

function LoginForm({ form, onSubmit }: LoginFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form-block">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter your ID" {...field} className="input-text"/>
              </FormControl>
              <FormDescription>
                Enter your user ID.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} className="input-text"/>
              </FormControl>
              <FormDescription>
                Enter your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ActionButton type="submit">Login</ActionButton>
      </form>
    </Form>
  )
}

// Main Component
export default function ComViewContent() {
  const userForm = useForm<UserFormValues>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
    },
  })

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  })

  const onUserSubmit: SubmitHandler<UserFormValues> = (data) => {
    toast({
      title: "User form submitted:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const onLoginSubmit: SubmitHandler<LoginFormValues> = (data) => {
    toast({
      title: "Login form submitted:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div>
      <h2>User Information Form</h2>
      <UserForm form={userForm} onSubmit={onUserSubmit} />

      <h2>Login Form</h2>
      <LoginForm form={loginForm} onSubmit={onLoginSubmit} />
    </div>
  )
}