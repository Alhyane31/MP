import {create} from 'zustand';

export const usePathologyStore = create(set => ({
  agent: null,
  selectedPathology: '',
  selectedPathologyType: '',
  setSelectedPathology: value => set({selectedPathology: value}),
  setAgent: value => set({agent: value}),
  setSelectedPathologyType: value => set({selectedPathologyType: value}),
}));
