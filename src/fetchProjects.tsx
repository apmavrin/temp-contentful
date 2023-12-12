import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { IProjectsFields } from "../@types/generated/contentful";
import { Project } from "./data";

const client = createClient({
  space: "9zis6xpm7bxv",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

console.log(import.meta.env.VITE_API_KEY);

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries<IProjectsFields>({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        return {
          id: item.sys.id,
          title: item.fields.title || "",
          image: 'https:' + item.fields.image?.fields?.file?.url,
          url: item.fields.url || ""
        }
      })
      setLoading(false);
      setProjects(projects)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects}
};

