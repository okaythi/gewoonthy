export class Permissions {
  static parse(octal) {
    const o = String(octal).padStart(3, '0');
    return {
      u: parseInt(o[0]),
      g: parseInt(o[1]),
      o: parseInt(o[2])
    };
  }

  static canExecute(perm) {
    return (perm & 1) !== 0;
  }

  static check(user, fileOwner, fileGroup, permsOctal) {
    const perms = this.parse(permsOctal);
    const groups = [user.primary_group, ...JSON.parse(user.secondary_groups || '[]')];

    // Root override
    if (groups.includes('root')) return true;

    // 1. Owner
    if (user.username === fileOwner) {
      return this.canExecute(perms.u);
    }
    // 2. Group
    if (groups.includes(fileGroup)) {
      return this.canExecute(perms.g);
    }
    // 3. Others
    return this.canExecute(perms.o);
  }
}
