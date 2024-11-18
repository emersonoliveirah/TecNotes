"use client";

import React, { useState } from 'react';
import { FaSearch, FaCog, FaStickyNote, FaClock, FaLock, FaPlus } from 'react-icons/fa';
import styles from './NotesPage.module.css'; // Importando CSS module

const NotesPage: React.FC = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: "...", content: "", isPrivate: false },
        { id: 2, title: "...", content: "", isPrivate: false },
        { id: 3, title: "...", content: "", isPrivate: false },
        { id: 4, title: "...", content: "", isPrivate: false },
    ]);

    const [privateNotes, setPrivateNotes] = useState([
        { id: 5, title: "...", content: "", isPrivate: true },
        { id: 6, title: "...", content: "", isPrivate: true },
        { id: 7, title: "...", content: "", isPrivate: true },
        { id: 8, title: "...", content: "", isPrivate: true },
    ]);

    const [reminders, setReminders] = useState([
        { id: 1, title: "" },
        { id: 2, title: "" },
        { id: 3, title: "" },
        { id: 4, title: "" },
    ]);

    const handleNoteChange = (id: number, content: string) => {
        setNotes(notes.map(note => note.id === id ? { ...note, content } : note));
    };

    const handlePrivateNoteChange = (id: number, content: string) => {
        setPrivateNotes(privateNotes.map(note => note.id === id ? { ...note, content } : note));
    };

    const handleReminderChange = (id: number, title: string) => {
        setReminders(reminders.map(reminder => reminder.id === id ? { ...reminder, title } : reminder));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <FaSearch className={styles.headerIcon} />
                    <input className={styles.headerInput} type="text" placeholder="Search" />
                </div>
                <div className={styles.headerRight}>
                    <FaCog className={styles.headerIcon} />
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerButton}>
                    <FaPlus className={styles.footerIcon} />
                    <span className={styles.footerButtonText}>New Note</span>
                </div>
                <div className={styles.footerButton}>
                    <FaLock className={styles.footerIcon} />
                    <span className={styles.footerButtonText}>Private Note</span>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <FaStickyNote className={styles.sectionIcon} />
                        <span className={styles.sectionTitle}>Quick Notes</span>
                    </div>
                    <div className={styles.notesContainer}>
                        {notes.map(note => (
                            <Note
                                key={note.id}
                                id={note.id}
                                content={note.content}
                                isPrivate={note.isPrivate}
                                onNoteChange={handleNoteChange}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <FaClock className={styles.sectionIcon} />
                        <span className={styles.sectionTitle}>Reminders</span>
                    </div>
                    <div className={styles.remindersContainer}>
                        {reminders.map(reminder => (
                            <Reminder
                                key={reminder.id}
                                id={reminder.id}
                                title={reminder.title}
                                onReminderChange={handleReminderChange}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <FaLock className={styles.sectionIcon} />
                        <span className={styles.sectionTitle}>Private Notes</span>
                    </div>
                    <div className={styles.notesContainer}>
                        {privateNotes.map(note => (
                            <Note
                                key={note.id}
                                id={note.id}
                                content={note.content}
                                isPrivate={note.isPrivate}
                                onNoteChange={handlePrivateNoteChange}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Note: React.FC<{ id: number; content: string; isPrivate?: boolean; onNoteChange: (id: number, content: string) => void }> = ({ id, content, isPrivate, onNoteChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [noteContent, setNoteContent] = useState(content);

    const handleSave = () => {
        onNoteChange(id, noteContent);
        setIsEditing(false);
    };

    const handleNoteClick = () => {
        setIsEditing(true);
    };

    return (
        <div className={styles.note} onClick={handleNoteClick}>
            {isEditing ? (
                <>
                    <textarea
                        className={styles.noteContentInput}
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        autoFocus
                    />
                    <button className={styles.saveButton} onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <p className={styles.noteContent}>{noteContent}</p>
                    {isPrivate && <FaLock className={styles.sectionIcon} />}
                </>
            )}
        </div>
    );
};

const Reminder: React.FC<{ id: number; title: string; onReminderChange: (id: number, title: string) => void }> = ({ id, title, onReminderChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [reminderTitle, setReminderTitle] = useState(title);

    const handleSave = () => {
        onReminderChange(id, reminderTitle);
        setIsEditing(false);
    };

    const handleReminderClick = () => {
        setIsEditing(true);
    };

    return (
        <div className={styles.reminder} onClick={handleReminderClick}>
            {isEditing ? (
                <>
                    <input
                        className={styles.reminderTitleInput}
                        value={reminderTitle}
                        onChange={(e) => setReminderTitle(e.target.value)}
                        autoFocus
                    />
                    <button className={styles.saveButton} onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span className={styles.reminderTitle}>{reminderTitle}</span>
                </>
            )}
        </div>
    );
};


export default NotesPage;
