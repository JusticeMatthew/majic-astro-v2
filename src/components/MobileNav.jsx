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
              <Menu.Button className="flex items-center justify-center w-14 h-14">
                <img
                  src="icons/close-icon.svg"
                  alt="navigation menu"
                  width={40}
                  height={40}
                />
              </Menu.Button>
            ) : (
              <Menu.Button className="flex items-center justify-center w-14 h-14">
                <img
                  src="icons/burger-menu.svg"
                  alt="navigation menu"
                  width={40}
                  height={40}
                />
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
              <Menu.Items className="absolute right-0 w-40 p-4 shadow bg-light rounded-lg">
                {navLinks.map((link) => (
                  <Menu.Item key={link[0]}>
                    {({ active, close }) => (
                      <div
                        onTouchStart={close}
                        className={`${
                          active ? 'bg-primary-gradient' : ''
                        } text-xl font-semibold rounded-lg py-2 px-3`}
                      >
                        <Link
                          to={link[0]}
                          onClick={close}
                          offset={link[3]}
                          className="text-xl font-semibold rounded-lg"
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
