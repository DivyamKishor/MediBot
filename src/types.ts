export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  seed: string;
}

export interface RegimentItem {
  id: string;
  title: string;
  sub: string;
  icon: string;
  color: string;
  completed: boolean;
  lastUpdated: string;
}

export interface UserProfile {
  userId: string;
  name: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  age?: number;
  sex?: string;
  avatarUrl?: string;
  createdAt: string;
  isDeleted?: boolean;
  doctors?: Doctor[];
  regiment?: RegimentItem[];
}

export interface VitalMeasurement {
  id?: string;
  userId: string;
  authUid: string;
  timestamp: string;
  heartRate: number;
  spo2: number;
  temperature: number;
  stress: "Low" | "Mod" | "High";
  type: "auto" | "manual";
}

export interface AIAnalysis {
  id?: string;
  userId: string;
  authUid: string;
  timestamp: string;
  content: string;
  vitalsId?: string;
}

export type ViewType = "dashboard" | "measure" | "history" | "ai";

export interface SharedReport {
  id?: string;
  authUid: string;
  patientName: string;
  patientAge?: number;
  patientSex?: string;
  patientBloodGroup?: string;
  patientAvatar?: string;
  measurements: VitalMeasurement[];
  createdAt: string;
}
