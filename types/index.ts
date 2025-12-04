export type ExerciseType = 'weight_reps' | 'bodyweight_reps' | 'duration' | 'distance_duration';
export type SetType = 'normal' | 'warmup' | 'dropset' | 'failure';

export interface TemplateExercise {
  id: string;
  name: string;
  exerciseType: ExerciseType;
  targetSets: number;
  targetReps?: string;
  targetDuration?: number;
  restSeconds?: number;
  supersetGroup?: string;
  notes?: string;
}

export interface TemplateWorkout {
  id: string;
  name: string;
  exercises: TemplateExercise[];
}

export interface Program {
  id: string;
  name: string;
  source: 'manual' | 'pdf_import';
  durationWeeks?: number;
  workouts: TemplateWorkout[];
  createdAt: number;
  updatedAt: number;
}

export interface LoggedSet {
  setIndex: number;
  setType: SetType;
  weight?: number;
  reps?: number;
  durationSeconds?: number;
  distanceMiles?: number;
  rpe?: number;
}

export interface LoggedExercise {
  exerciseId: string;
  exerciseName: string;
  exerciseType: ExerciseType;
  targetSets?: number;
  targetReps?: string;
  supersetGroup?: string;
  notes?: string;
  sets: LoggedSet[];
}

export interface CompletedWorkout {
  id: string;
  programId?: string;
  programName?: string;
  workoutTemplateId?: string;
  workoutName: string;
  startTime: number;
  endTime: number;
  notes?: string;
  exercises: LoggedExercise[];
}

export interface ActiveWorkout {
  programId?: string;
  workoutTemplateId?: string;
  workoutName: string;
  startTime: number;
  currentExerciseIndex: number;
  exercises: LoggedExercise[];
}

export interface UserSettings {
  weightUnit: 'lbs' | 'kg';
  distanceUnit: 'miles' | 'km';
}

export interface UserData {
  programs: Program[];
  workoutHistory: CompletedWorkout[];
  activeWorkout: ActiveWorkout | null;
  settings: UserSettings;
}
