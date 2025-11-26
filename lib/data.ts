// lib/data.ts
import homeData from '../data/home.json';
import tournamentsData from '../data/tournaments.json';
import trainingCampsData from '../data/training-camps.json';
import coachEducationData from '../data/coach-education.json';
import experiences from "../data/experiences.json";

export type HomeContent = typeof homeData;

export type Tournament = (typeof tournamentsData)[number];
export type TrainingCamp = (typeof trainingCampsData)[number];
export type CoachEducation = (typeof coachEducationData)[number];
export type Experiences = (typeof experiences)[number];

export function getHomeContent(): HomeContent {
  return homeData;
}

export function getTournaments(): Tournament[] {
  return tournamentsData;
}

export function getTournamentBySlug(slug: string): Tournament | undefined {
  return tournamentsData.find((t) => t.slug === slug);
}

export function getTrainingCamps(): TrainingCamp[] {
  return trainingCampsData;
}

export function getTrainingCampBySlug(slug: string): TrainingCamp | undefined {
  return trainingCampsData.find((c) => c.slug === slug);
}

export function getCoachEducation(): CoachEducation[] {
  return coachEducationData;
}

export function getCoachEdBySlug(slug: string): CoachEducation | undefined {
  return coachEducationData.find((c) => c.slug === slug);
}

export function getExperiences(): Experiences[] {
  return experiences;
}

export function getExperienceBySlug(slug: string): Experiences | undefined {
  return experiences.find((exp) => exp.slug === slug);
}