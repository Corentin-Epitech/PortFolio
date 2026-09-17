export function calculateAge(birthDate) {
    const today = new Date();

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const birthdayThisYear = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (today < birthdayThisYear) {
        age--;
    }

    return age;
}

export function calculateExperience(birthDate) {
    const today = new Date();

    let lastBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (today < lastBirthday) {
        lastBirthday.setFullYear(
            lastBirthday.getFullYear() - 1
        );
    }

    const nextBirthday = new Date(lastBirthday);
    nextBirthday.setFullYear(
        nextBirthday.getFullYear() + 1
    );

    const elapsed =
        today.getTime() - lastBirthday.getTime();

    const total =
        nextBirthday.getTime() - lastBirthday.getTime();

    return Math.min(
        100,
        Math.max(0, (elapsed / total) * 100)
    );
}