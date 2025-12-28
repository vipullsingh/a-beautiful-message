
export interface Memory {
  id: string;
  imageUrl: string;
  date: string;
  caption: string;
  isMilestone?: boolean;
}

// Fix: Added missing LovePage interface to satisfy the import in components/DiaryPage.tsx
export interface LovePage {
  title: string;
  imageUrl: string;
  message: string;
}

export enum AppState {
  VIEWING = 'VIEWING',
  PROPOSAL_ACCEPTED = 'PROPOSAL_ACCEPTED'
}
