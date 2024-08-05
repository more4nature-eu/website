import Community from '@/containers/home/community';
import Goals from '@/containers/home/goals';
import Intro from '@/containers/home/intro';
import MissionStrategy from '@/containers/home/mission-strategy';
import ThematicAreas from '@/containers/home/thematic-areas';

export default function Home() {
  return (
    <>
      <Intro />
      <Goals />
      <ThematicAreas />
      <MissionStrategy />
      <Community />
    </>
  );
}
