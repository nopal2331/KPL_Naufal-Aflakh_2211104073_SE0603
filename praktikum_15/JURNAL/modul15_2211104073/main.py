import tkinter as tk
from tkinter import messagebox
import json
import re
import hashlib
import os

# ==== Helper Functions ====

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def is_valid_username(username):
    return username.isalpha() and 5 <= len(username) <= 20

def is_valid_password(password, username):
    if len(password) < 8 or len(password) > 20:
        return False
    if username.lower() in password.lower():
        return False
    if not re.search(r"[!@#$%^&*]", password):
        return False
    return True

def load_users():
    if not os.path.exists('auth.json'):
        return {}
    with open("auth.json", "r") as file:
        try:
            return json.load(file)
        except json.JSONDecodeError:
            return {}

def save_users(users):
    with open("auth.json", "w") as file:
        json.dump(users, file)

# ==== UI and Logic ====

def register():
    username = entry_username.get()
    password = entry_password.get()

    if not is_valid_username(username):
        messagebox.showerror("Error", "Username harus 5-20 huruf alfabet ASCII.")
        return
    if not is_valid_password(password, username):
        messagebox.showerror("Error", "Password minimal 8 karakter, ada simbol unik, dan tidak boleh mengandung username.")
        return

    users = load_users()
    if username in users:
        messagebox.showwarning("Warning", "Username sudah terdaftar.")
        return

    users[username] = hash_password(password)
    save_users(users)
    messagebox.showinfo("Success", "Registrasi berhasil!")

def login():
    username = entry_username.get()
    password = entry_password.get()

    users = load_users()
    if username not in users:
        messagebox.showerror("Error", "Username tidak ditemukan.")
        return

    if users[username] != hash_password(password):
        messagebox.showerror("Error", "Password salah.")
        return

    messagebox.showinfo("Success", f"Selamat datang, {username}!")

# ==== GUI ====

app = tk.Tk()
app.title("Login & Register - Modul 15")

tk.Label(app, text="Username").pack()
entry_username = tk.Entry(app)
entry_username.pack()

tk.Label(app, text="Password").pack()
entry_password = tk.Entry(app, show="*")
entry_password.pack()

tk.Button(app, text="Register", command=register).pack(pady=5)
tk.Button(app, text="Login", command=login).pack(pady=5)

app.mainloop()
