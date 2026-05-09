'use client';
import dynamic from 'next/dynamic';

const HeroChips = dynamic(() => import('./HeroChips'), { ssr: false });
const RollingDice = dynamic(() => import('./RollingDice'), { ssr: false });
const DraggableChip = dynamic(() => import('./DraggableChip'), { ssr: false });

export function HeroChipsScene() {
  return <HeroChips />;
}

export function RollingDiceScene() {
  return <RollingDice />;
}

export function DraggableChipScene() {
  return <DraggableChip />;
}
