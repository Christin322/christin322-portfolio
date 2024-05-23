import { create } from 'zustand';

type ProjectsStore = {
  inViewProject: string | null;
  setInViewProject: (project: string | null) => void;
};

export const useProjectStore = create<ProjectsStore>((set) => ({
  inViewProject: null,
  setInViewProject: (project: string | null) => set({ inViewProject: project }),
}));
