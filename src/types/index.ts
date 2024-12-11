export interface Tontine {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  members: Member[];
  contributions: Contribution[];
  loans: Loan[];
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  joinDate: Date;
}

export interface Contribution {
  id: string;
  memberId: string;
  amount: number;
  date: Date;
  paymentMethod: 'celtisCash' | 'bank';
}

export interface Loan {
  id: string;
  borrowerId: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'paid';
  requestDate: Date;
  dueDate?: Date;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'joinRequest' | 'loanRequest' | 'payment' | 'system';
  read: boolean;
  createdAt: Date;
}