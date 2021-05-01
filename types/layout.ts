import { ProjectType } from './project';

export interface MetaProps
  extends Pick<ProjectType, 'date' | 'description' | 'image' | 'title'> {
  type?: string;
}
