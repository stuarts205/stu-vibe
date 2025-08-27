import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const agent = createAgent({
      name: "code-agent",
      system: "You are an expert next js developer.  You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await agent.run(
      `Write the following snippets: ${event.data?.value} `
    );
    console.log(output);

    return { output };
  }
);
