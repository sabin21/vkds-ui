"use client"

import Link from 'next/link';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
import { secondsInDay } from 'date-fns/constants';

// User Form Schema
const UserFormSchema = z.object({
  username: z.string().min(2, {
    message: "사용자 이름은 최소 3자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "이메일 주소를 다시 한번 확인하고 입력해주세요.",
  }),
  address: z.string().min(5, {
    message: "주소는 최소 5자 이상이어야 합니다.",
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
              <FormLabel className='form-label'>사용자 이름</FormLabel>
              <FormControl>
                <Input placeholder="사용자 아이디" {...field} className="input-text"/>
              </FormControl>
              {/* <FormDescription>
                사용자 명칭을 입력해주세요.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='form-label'>이메일 주소</FormLabel>
              <FormControl>
                <Input type="email" placeholder="이메일 주소" {...field} className="input-text"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='form-label'>주소입력</FormLabel>
              <FormControl>
                <Input placeholder="거주지 주소" {...field} className="input-text"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          <div className="input-item-wrap">
            <Checkbox id="checkbox-item-1" />
            <Label
              htmlFor="checkbox-item-1"
              className="form-label form-label-inline"
            >
              본 <Link className='_underline' href={""}>사용약관</Link>에 동의합니다.
            </Label>
          </div> 

        <ActionButton type="submit" variant="secondary">제출하기</ActionButton>
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
    <div className="content-wrap">
      <div className="section-block level2">

        <div className="frame-390 no-padding">

        
          <div className="_section-heading">
            <span className="heading-wrap">
              <h3 className="section-heading">사용자 정보</h3>
            </span>
          </div>

          <div className="_section-block">
            <UserForm form={userForm} onSubmit={onUserSubmit} />
          </div>
          
        </div>

        
      </div>
    </div>
  )
}