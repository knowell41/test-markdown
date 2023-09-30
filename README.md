## Sample Markdown Rendering in Next Js

 ![markdown data rendering](https://github.com/knowell41/test-markdown/assets/45946492/d071da63-28e2-474e-b637-cca133149120)

### Sample blog data fetched from API
```
{
    "id": 1,
    "title": "System Integration [Part 1]",
    "content": "# Hardware Integration\r\n\r\n## Introduction\r\nIn this blog post, I will provide a quick demonstration of how to connect physical devices and monitor/control their state using a web application built from scratch using React and Django.\r\n\r\n## Components needed\r\nTo complete this project, you will need the following components:\r\n- RPi \r\n- Arduino\r\n- Servo Motors\r\n- LED\r\n\r\n### Block Diagram\r\n(Include a description or illustration of the block diagram here.)\r\n\r\n### Schematic Diagram\r\n(Include a description or illustration of the schematic diagram here.)\r\n\r\n### Arduino programming\r\nTo control the Servo Motor and the state of the LEDs, we will create an API that communicates with the Arduino via Serial commands.\r\n\r\n## Up Next: REST APIs\r\n(Provide information about what readers can expect in the next part of your blog post.)",
    "created": "2023-09-29T19:06:50.401422Z"
}
```
The `content` in the API response is in Markdown format. The Next.js app will only need to render the Markdown and provide generic styling for the HTML tags equivalent of markdown data. For instance, `# heading1` in markdown is equivalent to `<h1>heading1</h1>` in HTML. [Reference](https://www.markdownguide.org/basic-syntax/)

### Sample JSX
```
import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const getBlogProps = async () => {
  const response = await axios.get('http://127.0.0.1:8000/blog/1')
  const blogData = response.data;
  return { blogData }
}

export default async function Home() {
  const { blogData } = await getBlogProps()
  console.log(blogData)
  return (
    <div>
      <ReactMarkdown >
      {blogData.content}
      </ReactMarkdown>
    </div>
  );
};
```

### Sample style
```

/* Style headings */
h1 {
  font-size: 2rem;
  color: #333;
}

h2 {
  font-size: 1.5rem;
  color: #444;
}

h3 {
  font-size: 1.2rem;
  color: #555;
}

/* Style paragraphs */
p {
  line-height: 1.4;
  margin-bottom: 1em;
}

/* Style lists */
ul, ol {
  margin-left: 1.5rem;
  margin-bottom: 1em;
}

/* Style list items */
li {
  margin-bottom: 0.5em;
}

/* Style links */
a {
  color: #007bff;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}

```
