import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className={title()}>Created by Anesu Nyakonda</h1>
      <h1 className="text-3xl font-bold mb-4">About This MERN Template</h1>
      <p className="mb-4">
        This MERN (MongoDB, Express, React, Node.js) template is designed to
        help developers quickly set up a modern full-stack web application with
        a clean and modular structure. It comes with pre-built UI components
        from
        <a href="https://heroui.dev" className="text-blue-500 hover:underline">
          {" "}
          Hero UI
        </a>
        , ensuring a visually appealing and responsive design out of the box.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">🎯 Purpose</h2>
      <p className="mb-4">
        The goal of this template is to provide a solid foundation for
        developers, reducing boilerplate code and accelerating project setup.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">🏗 Tech Stack</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>MongoDB</strong> - NoSQL database
        </li>
        <li>
          <strong>Express.js</strong> - Backend framework
        </li>
        <li>
          <strong>React</strong> - Frontend library
        </li>
        <li>
          <strong>Node.js</strong> - Server-side runtime
        </li>
        <li>
          <strong>Hero UI</strong> - Pre-designed UI components
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">📢 Disclaimer</h2>
      <p className="mb-4">
        This project utilizes UI components from Hero UI. The design and styling
        of these components are provided by Hero UI, and I do not claim
        ownership of them.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">🤝 Contributions</h2>
      <p className="mb-4">
        Contributions, issues, and feature requests are welcome! Feel free to
        open a GitHub issue or submit a pull request.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">📜 License</h2>
      <p className="mb-4">
        This template is open-source and available under the MIT License.
      </p>
    </div>
  );
}
