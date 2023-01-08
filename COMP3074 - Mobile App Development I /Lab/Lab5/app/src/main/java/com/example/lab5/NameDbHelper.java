package com.example.lab5;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class NameDbHelper extends SQLiteOpenHelper {
    public static final int  DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "names.db";



    public NameDbHelper(Context context){
        super(context, DATABASE_NAME, null,  DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL(NameContract.SQL_CREATE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {
        // this code is good for development only,
        // in release version  the upgrade code should be here!
        sqLiteDatabase.execSQL(NameContract.SQL_DROP);
        onCreate(sqLiteDatabase);
    }

    @Override
    public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion){
        onUpgrade(db, oldVersion, newVersion);
    }





}
