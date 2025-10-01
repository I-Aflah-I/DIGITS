"use client";

import React from "react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="flex justify-between items-center bg-white shadow p-4">
        <h1 className="flex items-center text-xl text-gray-900 font-bold">
          SMK TELKOM MAKASSAR
        </h1>
        <div className="font-medium text-gray-900">OKTAVIANTO</div>
      </header>
      <main className="flex flex-1 p-4 gap-4">
        <div className="flex-1 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Jurnal Mengajar
              </h2>
              <div className="flex items-center gap-2">
                <select className="border rounded-lg px-3 py-1 text-sm text-gray-600 cursor-pointer">
                  <option>XI RPL 1</option>
                  <option>XI RPL 2</option>
                  <option>XI RPL 3</option>
                  <option>XI RPL 4</option>
                </select>
                <input
                  type="date"
                  className="border rounded-lg px-3 py-1 text-sm text-gray-600"
                  defaultValue="2025-09-29"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-600">Hadir</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-600">Tidak Hadir</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-600">Belum</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-600">Simpan</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg text-gray-900 font-semibold mb-3">
              Aplikasi
            </h2>
            <div className="grid md:grid-cols-5 gap-3">
              {[
                "Jurnal Mengajar",
                "Nilai",
                "Akademik",
                "Presensi",
                "Rapor",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-600 text-white p-6 rounded-xl text-center font-semibold cursor-pointer hover:bg-blue-700 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg text-gray-900 font-semibold mb-3">
              To Do List
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Isi jurnal mengajar</li>
              <li>Input nilai ujian</li>
              <li>Rekap presensi kelas</li>
            </ul>
          </div>
        </div>
        <div className="w-80 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center text-center">
            <h2 className="text-lg text-gray-900 font-semibold mb-2">
              Guru Terbaik
            </h2>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
              alt="Guru"
              className="w-16 h-16 mb-2"
            />
            <p className="text-gray-600 text-sm">Belum ada guru terbaik</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg text-gray-900 font-semibold mb-2">News</h2>
            <Image
              src="/Assets/bakekok.png"
              alt="News Image"
              width={500}
              height={500}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-gray-900 font-bold">Aplikasi Cuti 3.0</h3>
              <p className="text-sm text-gray-600">
                Kami informasikan bahwa aplikasi cuti telah diperbarui ke versi
                3.0. Pembaruan ini dilakukan untuk menyesuaikan kebijakan baru.
              </p>
              <p className="text-xs text-gray-400 mt-1">6 hari yang lalu</p>
            </div>
          </div>
        </div>
        <aside className="w-80 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow flex flex-col h-[550px]">
            <h2 className="text-lg text-gray-900 font-semibold mb-3">
              Sapa Guru
            </h2>
            <div className="flex-1 overflow-y-auto space-y-3 text-sm">
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold text-gray-900">Daniel Duma Tanan</p>
                <p className="text-gray-600">
                  tabe, ada yang liat kunci motor ku?
                </p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold text-gray-900">
                  Ananda Dzikmah Amalia
                </p>
                <p className="text-gray-600">Keren sekali ini aplikasinya :)</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold text-gray-900">
                  Ananda Dzikmah Amalia
                </p>
                <p className="text-gray-600">Keren sekali ini aplikasinya :)</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold text-gray-900">
                  Ananda Dzikmah Amalia
                </p>
                <p className="text-gray-600">Keren sekali ini aplikasinya :)</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="font-semibold text-gray-900">Risayanti</p>
                <p className="text-gray-600">
                  Malam minggu dengan DIGITS... Semangat untuk kita semua
                  bapak/ibu
                </p>
              </div>
            </div>
            <div className="mt-3 text-gray-600">
              <input
                type="text"
                placeholder="Ketik sesuatu..."
                className="w-full p-2 border rounded-lg text-sm"
              />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
