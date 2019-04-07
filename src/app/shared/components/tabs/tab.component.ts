
export interface TabComponent {
  id: string;
  name: string;
  active: boolean;
  isCloseable: boolean;
  scrollPosition: number;

  scrollToPreviousPosition();
}
