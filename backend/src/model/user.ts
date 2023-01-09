import { ObjectId } from "mongodb";

export default class Authenticator {
  private studentIds: Set<ObjectId>;
  private teacherIds: Set<ObjectId>;

  constructor(studentIds: string[], teacherIds: string[]) {
    this.studentIds = new Set(studentIds.map(id => new ObjectId(id)));
    this.teacherIds = new Set(teacherIds.map(id => new ObjectId(id)));
  }

  public isStudent(id: string): boolean {
    return this.studentIds.has(new ObjectId(id));
  }

  public isTeacher(id: string): boolean {
    return this.teacherIds.has(new ObjectId(id));
  }
}  