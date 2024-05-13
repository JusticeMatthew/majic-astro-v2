import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
import navLinks from '@/constants/navLinks.js';

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            {open ? (
              <Menu.Button className="relative h-14 w-14">
                <div
                  id="burger"
                  className="absolute left-1/4 top-1/2 h-[2px] w-8 rotate-45 rounded-full"
                />
                <div
                  id="burger"
                  className="absolute left-1/4 top-1/2 h-[2px] w-8 -rotate-45 rounded-full"
                />
              </Menu.Button>
            ) : (
              <Menu.Button className="flex h-14 w-14 flex-col items-center justify-center gap-[6px]">
                <div id="burger" className="h-[2px] w-8 rounded-full" />
                <div id="burger" className="h-[2px] w-8 rounded-full" />
                <div id="burger" className="h-[2px] w-8 rounded-full" />
              </Menu.Button>
            )}
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 flex flex-col whitespace-nowrap rounded-lg bg-light p-medium text-dark shadow">
                {navLinks.map((link) => (
                  <Menu.Item key={link[0]}>
                    {({ active, close }) => (
                      <div
                        onTouchStart={close}
                        className={`${
                          active ? 'bg-primary-gradient' : ''
                        } mb-medium rounded-lg last:mb-0`}
                      >
                        <Link
                          to={link[0]}
                          onClick={close}
                          offset={link[3]}
                          className="rounded-lg font-medium"
                        >
                          <p>{link[1]}</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
