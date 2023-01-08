package com.example.lab5;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Context;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;
import java.util.jar.Attributes;

public class MainActivity extends AppCompatActivity {
    SharedPreferences pref;
    NameDbHelper dbHelper;
    SQLiteDatabase db;

    void  initDatabase(SQLiteDatabase db){

        ContentValues values = new ContentValues();
        values.put(NameContract.NameEntry.COLUMN_NAME_NAME, "Oanh");
        long rowId = db.insert(NameContract.NameEntry.TABLE_NAME, null, values);
        Log.d("DATABASE", "Row added with _ID=" + rowId);

        values = new ContentValues();
        values.put(NameContract.NameEntry.COLUMN_NAME_NAME, "Minn");
        rowId = db.insert(NameContract.NameEntry.TABLE_NAME, null, values);
        Log.d("DATABASE", "Row added with _ID=" + rowId);
    }

    int getNameCount(SQLiteDatabase db){
        String query = "SELECT COUNT(*) as CNT FROM " + NameContract.NameEntry.TABLE_NAME;
        Cursor c = db.rawQuery(query, null);

        while (c.moveToNext()){
            int idx  = c.getColumnIndex("CNT");
            if (idx == -1){
                Log.e("DATABASE_ERROR", "CNT does not exists in the query");
                return 0;
            }
            int cnt = c.getInt(idx);
            return cnt;

        }
        return 0;
    }

    List<NameEntity> getNames(SQLiteDatabase db){
        List<NameEntity> list = new ArrayList<>();

        String[] projection = {
                NameContract.NameEntry._ID,
                NameContract.NameEntry.COLUMN_NAME_NAME
        };

        Cursor c = db.query(NameContract.NameEntry.TABLE_NAME, projection,
                null, null, null, null, null);

        while (c.moveToNext()){
            int id = c.getInt(c.getColumnIndexOrThrow(NameContract.NameEntry._ID));
            String name = c.getString(c.getColumnIndexOrThrow(NameContract.NameEntry.COLUMN_NAME_NAME));
            NameEntity item = new NameEntity(name, id);
            list.add(item);

        }



        return list;
    }



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        dbHelper = new NameDbHelper(this);
        db = dbHelper.getWritableDatabase();

        if(getNameCount(db)==0){
            initDatabase(db);
        }




        //
        pref = getSharedPreferences(getString(R.string.shared_preferences_key), Context.MODE_PRIVATE); // set identifer

        //If you need only one preferences file use this
        //pref = getPreferences(Context.MODE_PRIVATE);

        TextView txt = findViewById(R.id.txt_preferences);
        if(pref.contains(getString(R.string.preference_key))){ // value_id in shared_preferences_key file
            // get the value if the key exits in the storage
            String user = pref.getString(getString(R.string.preference_key), " ");
            txt.setText(user);

        }else {
            txt.setText("No user found!");
            SharedPreferences.Editor editor = pref.edit();
            editor.putString(getString(R.string.preference_key), "Minh Nhat");
            editor.apply();

        }

        List<NameEntity> l = getNames(db);
        String s = "";

        for(NameEntity li:l){
            s +=li.getName() + "\n";
            Log.d("DATABASE_RESULT", li.getId() + " "+ li.getName());
        }
        txt.setText(s);





    }
}