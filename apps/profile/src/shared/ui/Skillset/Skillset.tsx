import { Chip, Group } from '@mantine/core';
import { getDisplayedSkills } from './getDisplayedSkills';

export type SkillsetProps = {
    requireSelfEmployment?: boolean;
    withEmployment?: boolean;
    skills?: null | { title?: string | null | undefined }[];
    max?: number;
};

export const Skillset = (props: SkillsetProps) => {
    const { withEmployment, skills, requireSelfEmployment, max = 4 } = props;

    const [displayedSkills, skillsOverflow] = getDisplayedSkills(skills, max);

    return (
        <Group gap={8}>
            {withEmployment &&
                (requireSelfEmployment ? (
                    <Chip
                        key="skills-employment"
                        checked
                        color="blue"
                        variant="light"
                    >
                        Требуется самозанятость
                    </Chip>
                ) : (
                    <Chip
                        key="skills-employment"
                        checked
                        color="blue"
                        variant="light"
                    >
                        Штат или самозанятость
                    </Chip>
                ))}

            {displayedSkills.map(({ title }) => (
                <Chip key={title} checked={false}>
                    {title}
                </Chip>
            ))}
            {skillsOverflow && (
                <Chip key="skills-overflow" checked={false}>
                    +{skillsOverflow}
                </Chip>
            )}
        </Group>
    );
};
