"use client";
import React, { useReducer, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import {
  userSignUpReducer,
  initialDispatchState,
} from "../hooks/reducers/userSignUpReducer";

export default function SignupForDemo() {
  const [userCredentials, dispatch] = useReducer(
    userSignUpReducer,
    initialDispatchState
  );
  const [ok, setOk] = useState<any>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(1)
    console.log(userCredentials);
    // (async () => {
    //   const res = await f,
    //   set
    //   });
    // })();

    fetch("https://drone-app-fapi.vercel.app/jwtlst", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userCredentials?.email,
      }),
    }).then((e: any) => {
      setOk(true);
    });
  };
  if (!ok)
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
         Feedback and Contact Form Q4 and Q5
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill out this form to get notifications and a free demo of our service!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              onChange={(e) => {
                dispatch({
                  type: "first_name_ch",
                  first_name: e.target.value,
                });
              }}
              value={userCredentials?.first_name}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              onChange={(e) => {
                dispatch({
                  type: "last_name_ch",
                  last_name: e.target.value,
                });
              }}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            onChange={(e) => {
              dispatch({
                type: "email_ch",
                email: e.target.value,
              });
            }}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="feedback">Feedback</Label>
          <Input
            id="email"
            placeholder="Feed back"
            type="email"
            onChange={(e) => {
              dispatch({
                type: "email_ch",
                email: e.target.value,
              });
            }}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="firstname">User Name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              onChange={(e) => {
                dispatch({
                  type: "first_name_ch",
                  first_name: e.target.value,
                });
              }}
              value={userCredentials?.first_name}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="firstname">Password</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              onChange={(e) => {
                dispatch({
                  type: "first_name_ch",
                  first_name: e.target.value,
                });
              }}
              value={userCredentials?.first_name}
              required
            />
          </LabelInputContainer>
          <a className="text-sm text-blue-600  text-left">Forgot password ? </a>
        <div className="h-1/2 w-full flex bg-back gap-5 py-5">
          <label className="text-sm text-center my-auto flex ">
           Rate us
          </label>
          <input
            className="items-start mt-1"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                type: "has_joined_waitlist",
                hasJoinedWaitList: Boolean(e.target.value) ?? false,
              });
            }}
          ></input>
           <input
            className="items-start mt-1"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                type: "has_joined_waitlist",
                hasJoinedWaitList: Boolean(e.target.value) ?? false,
              });
            }}
          ></input>
           <input
            className="items-start mt-1"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                type: "has_joined_waitlist",
                hasJoinedWaitList: Boolean(e.target.value) ?? false,
              });
            }}
          ></input>
           <input
            className="items-start mt-1"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                type: "has_joined_waitlist",
                hasJoinedWaitList: Boolean(e.target.value) ?? false,
              });
            }}
          ></input>
           <input
            className="items-start mt-1"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                type: "has_joined_waitlist",
                hasJoinedWaitList: Boolean(e.target.value) ?? false,
              });
            }}
          ></input>

        </div>
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="checkbox" className="text-start">Join waitlist</Label>
         <div className="h-5 w-5"><Input id="waitlist"  type="Checkbox" /></div>
        </LabelInputContainer>         */}

        {ok !== 1 ? <button
          className="hover:bg-sky-900 transition-all duration-500 ease-linear text-sm bg-gradient-to-br relative group/btn from-sky-600 dark:from-blue-900 dark:to-blue-500 to-blue-800 block dark:bg-blue-800 w-3/4 mx-auto text-white  h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button> : <button
          className="hover:bg-sky-900 blur-lg transition-all duration-500 ease-linear text-sm bg-gradient-to-br relative group/btn from-sky-600 dark:from-blue-900 dark:to-blue-500 to-blue-800 block dark:bg-blue-800 w-3/4 mx-auto text-white  h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Send &rarr;
          <BottomGradient />
        </button>}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
  else {
    return <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Thank you for joining our service!
        Check your inbox for the email.<br/>
        <small className="text-sm">(See Spam folder if not present)</small>
      </h2>
    </div>
  }
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
