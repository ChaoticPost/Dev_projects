export type SectionId =
  | 'intro'
  | 'about'
  | 'resources'
  | 'resource-detail'
  | 'project-case';

export interface NavItem {
  id: SectionId;
  label: string;
}

