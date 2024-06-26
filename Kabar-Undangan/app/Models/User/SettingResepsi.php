<?php

namespace App\Models\User;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SettingResepsi extends Model
{
    use HasFactory;

    protected $table = 'setting_resepsis';

    protected $fillable = [
        'user_id',
        'tampilkan',
        'tanggal',
        'waktu_mulai',
        'waktu_selesai',
        'tempat',
        'alamat',
        'google_maps',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
