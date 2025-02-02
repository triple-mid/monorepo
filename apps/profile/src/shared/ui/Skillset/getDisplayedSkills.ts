// TODO: remove from shared
export const getDisplayedSkills = <T>(
    skills: null | undefined | T[],
    max: number,
): [T[], number] => {
    if (!skills) {
        return [[], 0];
    }

    if (skills.length - max <= 0) {
        return [skills, 0];
    }

    const displayedSkills = skills.slice(0, max - 1);
    return [displayedSkills, skills.length - max];
};
