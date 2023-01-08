export default class Authenticator {
    private studentIds: Set<string>;
    private teacherIds: Set<string>;
  
    constructor(studentIds: string[], teacherIds: string[]) {
      this.studentIds = new Set(studentIds);
      this.teacherIds = new Set(teacherIds);
    }
  
    public isStudent(id: string): boolean {
      return this.studentIds.has(id);
    }
  
    public isTeacher(id: string): boolean {
      return this.teacherIds.has(id);
    }
  }
  
  const authenticator = new Authenticator(['123', '456', '789'], ['abc', 'def', 'ghi']);
  
  console.log(authenticator.isStudent('123')); // true
  console.log(authenticator.isStudent('abc')); // false
  console.log(authenticator.isTeacher('abc')); // true
  console.log(authenticator.isTeacher('123')); // false
  