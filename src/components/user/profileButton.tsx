import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

import SignOut from "../auth/signOut";
import { minimizeString } from "@/lib/utils";

const ProfileButton = ({ username }: { username: string }) => {
  return (
    <Menu as="div" className="relative inline-block md:mr-4">
      <Menu.Button>
        <div className="h-10 w-10 rounded-full bg-logo flex items-center justify-center text-center select-none">
          <span className="font-semibold text-sm text-logoSecondary ">
            {username ? username?.substring(0, 2) : "XP"}
          </span>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="p-4 absolute right-0 mt-3 w-56 origin-top-right rounded-md bg-base shadow-lg ring-1 ring-black/5 focus:outline-none">
          <Menu.Item>
            <p className="font-semibold text-xl select-none text-center">
              {minimizeString(username, 14)}
            </p>
          </Menu.Item>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <Menu.Item>
            <Link href="/history" className="font-medium">
              History
            </Link>
          </Menu.Item>
          <hr className="mt-2 mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <Menu.Item>
            <SignOut className="font-medium text-logo" />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileButton;
