import dotenv from "dotenv";
import { parseToObject } from "./utils.js";

// 加载 .env 文件的配置
dotenv.config();

const apiKey = process.env.DASHSCOPE_API_KEY;
const url =
  "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";

// 超时功能实现
const fetchWithTimeout = async (resource, options, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(id);
  }
};

// 核心函数
const generateIconData = async (iconName, imageUrl) => {
  const requestBody = {
    model: "qwen-vl-max",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `
            这个图标的名字是${iconName},请生成以下数据
            {
            name: ${iconName},
            title: 生成一个中文名称,
            category: 生成一个英文类别,
            categoryCN: 生成一个中文类别,
            tag: [中文关键词数组] 如果你不知道就使用空数组[],
            }
            `,
          },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
  };

  try {
    const response = await fetchWithTimeout(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      // throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // 提取 choices[0].message
    const message = data.choices?.[0]?.message?.content;
    if (message) {
      return parseToObject(message);
    } else {
      console.error("Message not found in response");
      // throw new Error("Message not found in response");
    }
  } catch (error) {
    console.error("Request failed:", error.message);
    // throw error;
  }
};

export { generateIconData };
