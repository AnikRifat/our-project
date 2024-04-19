'use client';

import { Accordion } from 'flowbite-react';
const FAQ = () => { return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
        <div className="mx-auto text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
<<<<<<< HEAD
            Frequently Asked Questions{" "}
=======
            Frequently Asked Questions - FAQ
>>>>>>> origin/main
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            {" "} Achieve more than you ever thought possible{" "}
          </p>
        </div>
        <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
<<<<<<< HEAD
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
=======
          <p className="mb-2 text-gray-500">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline"
>>>>>>> origin/main
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
<<<<<<< HEAD
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
=======
          <p className="mb-2 text-gray-500">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline">
>>>>>>> origin/main
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
<<<<<<< HEAD
          <p className="mb-2 text-gray-500 dark:text-gray-400">
=======
          <p className="mb-2 text-gray-500">
>>>>>>> origin/main
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
<<<<<<< HEAD
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
=======
          <p className="mb-2 text-gray-500">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline">
>>>>>>> origin/main
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
<<<<<<< HEAD
                className="text-cyan-600 hover:underline dark:text-cyan-500"
=======
                className="text-cyan-600 hover:underline"
>>>>>>> origin/main
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
      </div>
    </section>
    ); }; export default FAQ;