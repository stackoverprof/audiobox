// [README] : Pertama tama, ia ingin agar dia bisa mencari lagu kesukaannya. Ia ingin agar
// informasi tentang foto album, judul lagu, nama penyanyi, dan durasi lagu muncul di hasil
// pencariannya. Ia juga ingin memilih lagu yang nantinya ingin dia jadikan playlist. Ketika
// ia mencari dengan kata kunci yang lain dan menemukan lagu yang sudah pernah ia pilih, ia
// tidak ingin lagu tersebut bisa dia pilih lebih dari satu kali. Ia juga ingin dapat membuang
// pilihan lagu yang sebelumnya dia pilih. Jika sudah selesai memilih lagu, Gigih ingin agar
// ia bisa membuat playlist dari pilihan lagu yang sudah dia pilih sebelumnya. Gigih juga ingin
// selalu menuliskan judul dan deskripsi dari playlist tersebut. Untuk judul, ia ingin agar
// judul dari semua playlist yang dia buat menggunakan aplikasi ini, memiliki panjang minimal
// 10 karakter. Ia juga ingin agar playlist yang dibuat selalu merupakan private playlist dan
// bukan merupakan collaborative playlist. Ketika playlist sudah berhasil dibuat, Gigih ingin
// mengetahui bahwa playlist tersebut sudah berhasil dibuat.

import React from 'react';
import Main from 'src/main';
import randomBytesJs from 'random-bytes-js';
import { render, waitFor } from '@testing-library/react';

describe('Simulate creating playlist', () => {
	test('SHOULD retrieve search results as cards', () => {
		//
	});

	test('SHOULD see cover, title, artist, and duration', () => {
		//
	});

	test('Track SHOULD be selected only once', () => {
		//
	});

	test('SHOULD be able to unselect', () => {
		//
	});

	test('SHOULD always require title (>10) and description (>0)', () => {
		//
	});

	test('SHOULD see success confirmation after created', () => {
		//
	});

	test('Result SHOULD be non-public and non-collaborative', () => {
		//
	});
});

